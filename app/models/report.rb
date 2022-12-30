class Report < ApplicationRecord
  belongs_to :user
  has_one :pet, dependent: :destroy
  accepts_nested_attributes_for :pet, allow_destroy: true

  enum :report_type, { lost: 0, found: 1 }, default: 0
  scope :random_sample, -> (num = nil) { order('RANDOM()').take(num || 10) }
end
