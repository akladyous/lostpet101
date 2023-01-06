class UserAddressSerializer < ActiveModel::Serializer
  attributes :id, :address, :city, :zip_code, :state, :country
  has_one :user
end
