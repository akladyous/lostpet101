class Pet < ApplicationRecord
  has_one_attached :image
  belongs_to :report, optional: true

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
  enum :collar, { No: 0, Yes: 1 }, default: :No

  validates :name, :species, :gender, :size, :collar, :description, presence: true
  validates :age, numericality: { only_integer: true, in: 1..15 }
  validate :image_validation

  def image_validation
    if !image.attached? || !image.content_type.in?(['image/jpeg', 'image/png', 'image/jpg'])
      errors.add(:image, 'invalida image format')
    end
  end
end
