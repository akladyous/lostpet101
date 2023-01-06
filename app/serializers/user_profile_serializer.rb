class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :home_phone, :cell_phone, :job_title, :company, :website, :blog
  has_one :user
end
