FROM ruby:3.2.0-slim-bullseye

RUN apt-get update && apt-get install -y --no-install-recommends --assume-yes \
  sudo bash curl git gnupg2 bash-completion libpq-dev \
  build-essential patch ruby-dev zlib1g-dev liblzma-dev \
  pkg-config libglib2.0-dev libexpat1-dev libvips \
  && rm -rf /var/lib/apt/lists/* \
  && sudo adduser --disabled-password deploy \
  # INSTALL NODE-JS
  && sudo \curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - \
  && apt-get update -yq && sudo apt-get install -y nodejs


ENV BUNDLE_PATH /usr/local/bundle/gems
ENV TMP_PATH /tmp/
ENV RAILS_LOG_TO_STDOUT true
ENV APP_PATH /pet-finder
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
COPY client/package.json ./client/package.json
COPY client/package-lock.json ./client/package-lock.json

RUN chmod +x /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/react.sh
RUN npm ci --prefix ./client
COPY . ./
RUN /usr/bin/react.sh

ENTRYPOINT ["entrypoint.sh"]
EXPOSE $RAILS_PORT

CMD ["rails", "server", "-b", "0.0.0.0"]

