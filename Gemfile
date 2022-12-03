source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.1.2"
gem "rails", "~> 7.0.4"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "bcrypt", "~> 3.1.7"
gem "rack-cors"
gem "bootsnap", require: false
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem 'active_model_serializers', '~> 0.10.13'

# gem "image_processing", "~> 1.2"

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
end

group :development do
  gem 'faker', git: 'https://github.com/faker-ruby/faker.git', branch: 'main', require: false
  gem 'ruby-progressbar', '~> 1.8', '>= 1.8.1'
  gem 'solargraph', '~> 0.45.0'
  gem 'solargraph-rails', '~> 0.3.1'
end

