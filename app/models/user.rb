class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar #, service: :amazon

  validates :email, presence: true, uniqueness: { case_sensitive: false }, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'invalid email format' }
  validates :password, presence: true, length: { in: 5..64 }, confirmation: { case_sensitive: true }
  validates :password_confirmation, presence: true, length: { in: 5..64 }

  before_save { email.downcase! if email }
end
