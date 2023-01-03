class Report < ApplicationRecord
  belongs_to :user
  has_one :pet, dependent: :destroy
  accepts_nested_attributes_for :pet, allow_destroy: true

  enum :report_type, { lost: 0, found: 1 }, default: 0
  scope :random_sample, -> (num = nil) { order('RANDOM()').take(num || 10) }

  validates :report_type, :lost_found_date, :address, :crossroads, :comment, presence: true
  validates :report_type, inclusion: { in: %w(lost found) }

  def date_validator
    if (Date.parse(lost_found_date) rescue ArgumentError ) == ArgumentError
      errors.add(:lost_found_date, 'Invalida date format')
    end
    # DateTime.parse(lost_found_date).strftime("%Y %b %d") && !DateTime.parse(lost_found_date) > Date.today

  end
end
