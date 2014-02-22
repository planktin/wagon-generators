# Wagon Template Generators

This is a collection of wagon generators for [LocomotiveCMS](http://locomotivecms.com), an open source CMS built on Rails. At the moment there are 2 basic generators which allow you to generate a wagon site with [Foundation 5](http://foundation.zurb.com/). The libsass template is also powered by Bower, Grunt and Libsass.

## Requirements

You'll need to at least

  * [Install Wagon](http://doc.locomotivecms.com/get-started/install-wagon) for LocomotiveCMS.
  * NodeJS and NPM

## Quickstart

```bash
cd path-to-my-wagon-sites-home
git clone git@github.com:planktin/wagon-generators.git
wagon list_templates --lib=wagon_generators/foundation.rb
```

From there you can choose which flavour you'd like to install. 

## Foundation 5 (Libsass)

If you'd like to install using the latest version of Foundation (Foundation 5), upgradeable with Bower, run:

```bash
$ cd ~/wagon_sites
$ wagon init mysite -t foundation_libsass --lib=wagon_generators/foundation.rb
$ cd ~/wagon_sites/mysite
$ npm install && bower install
```

This will generate an empty wagon site, grab the latest version of foundation, foundation-icons and font-awesome and put them in the root directory (under bower_components/ and node_modules/)

You can then use grunt to compile your SCSS/SASS into the public directory.

```bash
$ cd ~/wagon_sites/mysite
$ grunt
```

A grunt watch task is set up, so when you want to edit any settings or styles for your app just edit the files in app/assets/scss. Grunt will run some tasks to recompile your CSS into the public folder.

You can now preview your site by starting MongoDB...

```bash
$ mongod
```
and wagon server (in a new terminal tab/window):
```bash
$ wagon serve
```

Then fire up your browser and head to http://0.0.0.0:3333/


### [Foundation Icons Bug](https://github.com/zurb/foundation-icon-fonts/pull/1)

In your 'browser_components/foundation-icon-fonts/_foundation-icon-fonts.scss' file, remove the fi-path from the "@font-face { font-family: ... }" declaration. I.e. change

font-family: "#{$fi-path}/foundation-icons";

to

font-family: "foundation-icons";

and leave the rest of the src declarations as is.

## Roadmap / To Do

 * Add a more 'fleshed out' template including common content types, such as contact forms and blogs.
 * Add better mobile support 'out of the box'