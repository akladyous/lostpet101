class UserSerializer < ActiveModel::Serializer
  attributes :email, :photo_url, :last_signin_at, :created_at

  def photo_url
        if object.avatar.attached?
            Rails.application.routes.url_helpers.rails_blob_url(self.object.avatar.blob, only_path: true)
        else
            nil
        end
    end
end
