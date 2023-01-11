# require 'ruby-progressbar'
require 'faker'
Faker::Config.locale = :en

system('clear')
REPORTS_TO_CREATE = ENV['records'] || 20
system('clear')
puts "🌱 Start Seeding ..."

# user_progress = ProgressBar.create(title: "  #{REPORTS_TO_CREATE} reports ⏱️", total: REPORTS_TO_CREATE)

def generate_pet
  species = -> { %w[dog cat].sample }.call
  coat_list = lambda {
    ['Hairless', 'Curly-Coated', 'Wire-Coated', 'Long-Coated', 'Short-Coated', 'Medium-Coated', 'Smooth',
     'Double and Single Coated', 'Silky Coated', 'Rough Coated', 'Wire', 'Coated', 'Hairless', 'Drying a silky coated', 'Washing a silky coated', 'Drying a double coated']
  }
  color_list = lambda {
    ['Black and tan', 'brown and tan', 'Bicolor', 'Irish spotted', 'Flashy', 'Patched', 'Tuxedo', 'Tricolor', 'Spotted',
     'Flecked', 'ticked', 'speckled', 'Brindle', 'Sable']
  }
  {
    name: Faker::Creature::Animal.name,
    species: species,
    gender: %w[male female].sample,
    size: %w[small medium large].sample,
    breed: -> { species == 'dog' ? Faker::Creature::Dog.breed : Faker::Creature::Cat.breed }.call.downcase,
    color: color_list.call.sample,
    age: rand(1..15),
    # coat: coat_list.call.sample,
    # height: rand(0.65..3.28).round(2),
    # weight: rand(15..145),
    # microchip: -> { rand.to_s[2..9] }.call,
    collar: ["Yes", "No"].sample,
    description: Faker::Lorem.paragraph(sentence_count: 10, supplemental: false, random_sentences_to_add: 4)
  }
end

def generate_report
  address = Faker::Address.full_address
  {
    report_type: -> { %w[lost found].sample }.call,
    lost_found_date: -> { rand(1.year.ago..2.month.ago) }.call,
    address:,
    crossroads: address.split(',').first,
    comment: Faker::Lorem.paragraph(sentence_count: 10, supplemental: false, random_sentences_to_add: 4)
  }
end

def generate_user
  {
    email: Faker::Internet.unique.email,
    password: '000000',
    password_confirmation: '000000'
  }
end

uuid = -> { SecureRandom.uuid }

1.upto(REPORTS_TO_CREATE) do |idx|
  avatar = -> { "https://raw.githubusercontent.com/akladyous/petfinder-assets/main/avatars/avatar#{idx}.jpg" }
  downloaded_avatar = URI.parse(avatar.call).open
  User.new(generate_user) do |user|
    user.avatar.attach(io: downloaded_avatar, filename: "#{uuid.call}.jpg")
    user.save
    user.reports.new(generate_report) do |report|
      report.build_pet(generate_pet)
      species = report.pet.species
      pet_image = -> { "https://raw.githubusercontent.com/akladyous/petfinder-assets/main/#{species.pluralize}/#{species}#{idx}.jpg" }
      downloaded_pet_image = URI.parse(pet_image.call).open
      report.pet.image.attach(io: downloaded_pet_image, filename: "#{uuid.call}.jpg")

      report.save
    end
    # user_progress.increment
  end
end
puts "🌱 End   Seeding ..."
