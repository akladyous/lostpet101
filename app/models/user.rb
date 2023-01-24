class User < ApplicationRecord
  has_secure_password

  has_one_attached :avatar, service: :amazon
  has_many :reports, dependent: :destroy
  has_many :pets, through: :reports
  has_many :report_requests, dependent: :destroy
  has_many :likes, dependent: :destroy

  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'invalid email format' }
  validates :password, presence: true, length: { in: 5..32 }, confirmation: { case_sensitive: true }
  validates :password_confirmation, presence: true, length: { in: 5..32 }

  enum :role, {user: 0, guest: 1, admin: 2}

  def likes?(pet)
    likes.where(pet_id: pet.id).any?
  end

  def like!(pet)
    likes.where(pet: pet).first_or_create
  end

  def dislike!(pet)
    likes.where(pet: pet).destroy
  end

  before_save { email&.downcase }
end
