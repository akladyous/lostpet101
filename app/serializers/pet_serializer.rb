class PetSerializer < ActiveModel::Serializer
  attributes :name, :species, :gender, :size, :breed, :color, :age, :collar, :description, :photo_url, :created_at, :updated_at
  def photo_url
    object.image.blob.url if object.image.attached?
  end
  # has_one :report
end
