FROM ruby:3.2.0-slim-bullseye

RUN apt-get update && apt-get install -y --no-install-recommends --assume-yes \
  sudo bash curl git gnupg2 bash-completion libpq-dev \
  build-essential patch ruby-dev zlib1g-dev liblzma-dev \
  pkg-config libglib2.0-dev libexpat1-dev libvips \
  && rm -rf /var/lib/apt/lists/*

RUN sudo adduser --disabled-password deploy

# INSTALL NODE-JS
RUN sudo \curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash -
RUN sudo apt-get install -y nodejs
RUN curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
RUN echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
RUN sudo apt-get update && sudo apt-get install yarn

ENV BUNDLE_PATH /usr/local/bundle/gems
ENV TMP_PATH /tmp/
ENV RAILS_LOG_TO_STDOUT true
ENV APP_PATH /petfinder
ENV RAILS_PORT 3000
ENV RAILS_ENV production
ENV RAILS_SERVE_STATIC_FILES true
ENV RAILS_LOG_TO_STDOUT true
ENV BUNDLE_WITHOUT development


RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

COPY ./Gemfile $APP_PATH/Gemfile
ADD Gemfile $APP_PATH/Gemfile
ADD Gemfile.lock $APP_PATH/Gemfile.lock

RUN npm install npm@latest -g
RUN gem install rubygems-update --no-document
RUN gem install bundler
RUN gem install rails
RUN bundle instal --jobs=2 --retry=2 \
  # && rm -rf /usr/local/bundle/cache/*.gem \
  && find /usr/local/bundle/gems/ -name "*.c" -delete \
  && find /usr/local/bundle/gems/ -name "*.o" -delete \
  && rm -rf /usr/local/bundle/cache && rm -rf /usr/local/bundle/cache

COPY docker/* /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE $RAILS_PORT

CMD ["rails", "server", "-b", "0.0.0.0"]

