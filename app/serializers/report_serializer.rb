class ReportSerializer < ActiveModel::Serializer
  attributes :report_type, :lost_found_date, :address, :crossroads, :comment, :created_at, :updated_at
  has_one :pet
end
