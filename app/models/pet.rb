class Pet < ApplicationRecord
  has_one_attached :image
  belongs_to :report

  enum :species, {
    dog: 0,
    cat: 1,
    bird: 2,
    horse: 3,
    rabbit: 4,
    reptile: 5,
    ferret: 6,
    other: 7
  }, default: :dog
  enum :gender, { male: 0, female: 1, unknown: 2 }, default: :male
  enum :size, { small: 0, medium: 1, large: 2, giant: 3 }, default: :small
end
