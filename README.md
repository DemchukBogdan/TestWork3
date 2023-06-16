# TestProgect

### Installation

Node & Watchman
We recommend installing Node and Watchman using Homebrew. Run the following commands in a Terminal after installing Homebrew:

- brew install node
- brew install watchman

If you have already installed Node on your system, make sure it is Node 14 or newer

### Ruby
Ruby is a general-purpose programming language. 
React Native uses in some scripts related to the iOS dependency management. 
As every programming language, there are different versions of Ruby that have been developed during the years.

React Native uses a .ruby-version file to make sure that your version of Ruby is aligned with what is needed. Currently, macOS 13.2 is shipped with Ruby 2.6.10, which is not what is required by this version of React Native (2.7.6). 
Our suggestion is to install a Ruby version manager and to install the proper version of Ruby in your system.

Some common Ruby version manager are:

- rbenv
- RVM
- chruby
- asdf-vm with the asdf-ruby plugin

To check what is your current version of Ruby, you can run this command:

- ruby --version

React Native uses this version of Ruby. You can also find which version your specific project needs in the .ruby-version file at root of your RN project.

### Ruby's Bundler
Ruby uses the concept of gems to handle its own dependencies. You can think of a gem as a package in NPM, a formula in Homebrew or a single pod in CocoaPods.

Ruby's Bundler is a Ruby gem that helps managing the Ruby dependencies of your project. We need Ruby to install CocoaPods and using Bundler will make sure that all the dependencies are aligned and that the project works properly.

### Installing

Install node_modules

- npm install

Install pod

- cd ios
- bundle exec pod install

### Start 

- npm start

After that press i for run IOS

### AUTHORIZATIONs

Write some login > 3 symbols
