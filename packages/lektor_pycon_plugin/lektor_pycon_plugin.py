# -*- coding: utf-8 -*-
"""This is a custom local plugin to ad extra functionality to pybee site."""

# Standard library imports
from collections import OrderedDict
import os
import shutil
import sys

# Third party imports
from lektor.pluginsystem import Plugin
from lektor.reporter import reporter


PY3 = sys.version_info[0] == 3


class PyConPlugin(Plugin):
    name = 'PyCon Custom Lektor Plugin'
    description = 'This is a custom local plugin to add extra functionality.'

    COPY_FILES = ('LICENSE.txt', 'README.md')

    def on_setup_env(self, **extra):
        self.env.jinja_env.globals.update(dir=dir)
        self.env.jinja_env.globals.update(OrderedDict=OrderedDict)
        self.env.jinja_env.globals.update(set=set)

    def on_after_build_all(self, builder, **extra):
        """
        Once the build process is over, save README and LICENSE.txt to assets.
        """
        for f in self.COPY_FILES:
            fpath = os.path.join(builder.env.root_path, f)
            fbuildpath = os.path.join(builder.destination_path, f)

            if os.path.isfile(fbuildpath):
                os.remove(fbuildpath)

            if os.path.isfile(fpath):
                shutil.copy(fpath, fbuildpath)
                reporter.report_generic("{} copied to assets folder".format(f))
