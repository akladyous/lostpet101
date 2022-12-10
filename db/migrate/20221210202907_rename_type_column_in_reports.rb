class RenameTypeColumnInReports < ActiveRecord::Migration[7.0]
  def change
    rename_column :reports, :type, :report_type
  end
end
