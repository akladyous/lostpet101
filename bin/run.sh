
docker run --name rails -it --rm  -v ${pwd}:/volume rails /bin/bash
docker build -t rails .
docker start rails
docker exec -it rails bash

# ---------------------------------------------------------------------
https://nokogiri.org/tutorials/installing_nokogiri.html#installing-with-custom-non-standard-libraries

Debian/Ubuntu¶
# ---------------------------------------------------------------------
sudo apt-get install pkg-config libxml2-dev libxslt-dev
gem install nokogiri --platform=ruby -- --use-system-libraries
# ---------------------------------------------------------------------
MacOS
If you're using homebrew:

brew install libxml2 libxslt
gem install nokogiri --platform=ruby -- --use-system-libraries
# ---------------------------------------------------------------------
gem install nokogiri --platform=ruby
gem install nokogiri --platform=ruby -- --use-system-libraries


rm -rf Gemfile.lock
bundle lock --add-platform ruby
bundle lock --add-platform x86_64-linux
bundle install
