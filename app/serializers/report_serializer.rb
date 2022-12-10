class ReportSerializer < ActiveModel::Serializer
  attributes :id, :report_type, :lost_found_date, :address, :crossroads, :comment
  has_one :user
end
