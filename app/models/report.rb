class Report < ApplicationRecord
  belongs_to :user
  has_one :pet, dependent: :destroy

  enum :type, { lost: 0, found: 1 }, default: 0

  scope :random_sample, -> (num = nil) { order('RANDOM()').take(num || 10) }
end
