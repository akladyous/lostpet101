class UserSerializer < ActiveModel::Serializer
  # include Rails.application.routes.url_helpers
  attributes :email, :photo_url, :last_signin_at, :created_at

  def photo_url
    object.avatar.blob.url if object.avatar.attached?
    # rails_blob_path(object.avatar, only_path: true) if object.avatar.attached?
  end
end
