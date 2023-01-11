FROM ruby:3.2.0-alpine AS builder

RUN apk update && apk add sudo bash git bash-completion
RUN apk update && apk -U add --no-cache build-base tzdata npm nodejs yarn libvips
RUN apk update && apk -U add --no-cache postgresql-dev postgresql-client
RUN apk update && apk -U add --no-cache libxml2-dev libxslt-dev

RUN rm -rf /var/cache/apk/*

ENV BUNDLE_PATH /usr/local/bundle/gems
ENV TMP_PATH /tmp/
ENV RAILS_LOG_TO_STDOUT true
ENV APP_PATH /petfinder
ENV RAILS_PORT 3000 \
  RAILS_ENV production \
  RAILS_SERVE_STATIC_FILES true \
  RAILS_LOG_TO_STDOUT true \
  BUNDLE_WITHOUT="development"

RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

COPY ./Gemfile $APP_PATH/Gemfile
ADD Gemfile $APP_PATH/Gemfile
ADD Gemfile.lock $APP_PATH/Gemfile.lock
COPY docker/* /usr/local/bin/

RUN npm install npm@latest -g
RUN gem install rubygems-update --no-document
RUN gem install bundler
RUN gem install rails
RUN bundle instal --jobs=2 --retry=2 \
  && find /usr/local/bundle/gems/ -name "*.c" -delete \
  && find /usr/local/bundle/gems/ -name "*.o" -delete \
  && rm -rf /usr/local/bundle/cache && rm -rf /usr/local/bundle/cache

RUN sudo adduser --disabled-password deploy

EXPOSE $RAILS_PORT
CMD ['rails', 'server', '-b', '0.0.0.0']
