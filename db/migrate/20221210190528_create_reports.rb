class CreateReports < ActiveRecord::Migration[7.0]
  def change
    create_table :reports do |t|
      t.integer :type, limit: 1, default: 0
      t.datetime :lost_found_date, default: -> { 'CURRENT_TIMESTAMP' }
      t.string :address
      t.string :crossroads
      t.string :comment
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
