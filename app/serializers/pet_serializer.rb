class PetSerializer < ActiveModel::Serializer
  # include Rails.application.routes.url_helpers
  attributes :id, :name, :species, :gender, :size, :breed, :color, :age, :collar, :description, :photo_url, :created_at, :updated_at
  def photo_url
    object.image.blob.url if object.image.attached?
    # rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
  has_many :likes
  # has_one :report
end
