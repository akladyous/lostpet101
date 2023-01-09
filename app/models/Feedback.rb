class Feedback
  include ActiveModel::Conversion
  extend  ActiveModel::Naming
  include ActiveModel::Validations

  attr_accessor :first_name, :last_name, :email, :phone, :subject, :message

  def initialize(attributes = {})
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  validates_presence_of :first_name, :last_name, :email, :subject, :message
  validates_format_of :email, with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i

  def persisted?
    false
  end
end
