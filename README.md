# Wagon Template Generator for LocomotiveCMS

This generator is under development, but will soon feature a basic template for [Foundation 5](http://foundation.zurb.com/).

## Requirements

You'll need to at least

  * [Install Wagon](http://doc.locomotivecms.com/get-started/install-wagon) for LocomotiveCMS.

## Quickstart

```bash
cd path-to-my-wagon-sites-home
git clone git@github.com:planktin/wagon-generators.git
wagon list_templates --lib=wagon_generators/foundation.rb
```

From there you can choose which flavour you'd like to install. 

## Foundation with Bower and Grunt

If you'd like to install using the latest version of Foundation, upgradeable with Bower, run:

```bash
cd ~/wagon_sites
wagon init mysite -t foundation_libsass --lib=wagon_generators/foundation.rb
cd mysite/vendor/foundation-libsass
npm install && bower install
```

This will generate an empty wagon site, grab the latest version of foundation, foundation-icons and font-awesome and put them in /vendors/foundation-libsass/

You can then use grunt to compile your SCSS/SASS into the public directory

```bash
cd ~/wagon_sites/mysite/vendor/foundation-libsass
grunt
```

Please note these templates are still under development and will currently give you an empty wagon site.