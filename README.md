`narwhal-specs`
==============

`narwhal-specs` is a library used in conjunction with narwhal-jsc's ability to
run with a WebKit browser view instance to implement acceptance tests without
needing a browser running. On Mac OS X, this makes the tests effectively headless.

Tests run fast on WebKit and JavaScriptCore, and the system is built on
[JSpec](http://wiki.github.com/visionmedia/jspec/).

Installation and Running
------------------------

Currently `narwhal-specs` is experimental and requires a fork of narwhal-jsc
that adds a few capabilities to the narwhal-jsc narwhal-webkit-debug mode. See
http://github.com/Shadowfiend/narwhal-jsc for that repository. It is intended
that the expansions to narwhal-jsc instead move into their own project that is
built separately, but regardless there will, for now, be a compiled component.

That said, "installation" is not really installation yet -- instead, you set up
narwhal-jsc and run narwhal-specs with it.

    $ git clone git://github.com/tlrobinson/narwhal.git narwhal
    $ cd narwhal/engines
    $ git clone git://github.com/Shadowfiend/narwhal-jsc.git jsc
    $ cd jsc
    $ make
    $ cd ../../../
    $ git clone git://github.com/Shadowfiend/narwhal-specs
    $ cd narwhal-specs
    $ ./narwhal-specs my/test/path.js
    $ ../narwhal/engines/jsc/bin/narwhal-webkit-debug narwhal-specs.js my/test/path.js

Where `my/test/path.js` is a path to your tests.

The `narwhal-specs` script checks for one of two things:
* If narwhal-webkit-debug is on your PATH, it runs that.
* If not, it assumes narwhal-webkit-debug is at ../narwhal/engines/jsc/bin/narwhal-webkit-debug.

Usage
-----

`narwhal-specs` is essentially a package with two useful libraries (jQuery and
JSpec) plus a set of helper functions to facilitate acceptance testing. Here is
a quick list of useful functions:


