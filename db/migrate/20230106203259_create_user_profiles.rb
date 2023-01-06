class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.string :first_name
      t.string :last_name
      t.string :home_phone
      t.string :cell_phone
      t.string :job_title
      t.string :company
      t.string :website
      t.string :blog
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
