require 'ruby-progressbar'
require 'faker'
Faker::Config.locale = :en

system('clear')
puts 'How many records ?'
USERS_TO_CREATE = gets.strip.to_i
system('clear')
puts "🌱 Seeding #{USERS_TO_CREATE.to_i} Users ..."

user_progress = ProgressBar.create(title: 'Creating users', total: USERS_TO_CREATE)

folder = Rails.root.join('app/assets/images/avatars')
images = proc { |avatars_folder|
  Dir.entries(avatars_folder).map(&:downcase).reject { |folder| folder.starts_with? '.' }
}

1.upto(USERS_TO_CREATE) do |idx|
  image = -> { "https://raw.githubusercontent.com/akladyous/petfinder-assets/main/avatars/avatar#{idx}.jpg" }
  downloaded_image = URI.parse(image.()).open
  User.new do |user|
    email = Faker::Internet.unique.email
    user.email = email
    user.password = '000000'
    user.password_confirmation = '000000'
    user.avatar.attach(io: downloaded_image, filename: "avatar#{idx}.jpg")
    user.save
    user_progress.increment
  end
end
