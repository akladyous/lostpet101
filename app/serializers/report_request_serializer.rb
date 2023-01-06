class ReportRequestSerializer < ActiveModel::Serializer
  attributes :id, :message
  has_one :user
end
