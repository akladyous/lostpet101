
rm -rf Gemfile.lock
bundle lock --add-platform ruby
bundle lock --add-platform x86_64-linux
bundle install
