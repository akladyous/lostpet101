class ReportSerializer < ActiveModel::Serializer
  attributes :report_type, :lost_found_date, :address, :crossroads, :comment
  has_one :pet
end
