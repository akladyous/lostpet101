class CreatePets < ActiveRecord::Migration[7.0]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :species, default: 0
      t.integer :gender, default: 0
      t.integer :size, default: 0
      t.string :breed
      t.string :color
      t.string :coat
      t.decimal :age, precision: 4, scale: 2
      t.decimal :height, precision: 5, scale: 2
      t.decimal :weight, precision: 5, scale: 2
      t.integer :microchip
      t.boolean :collar, default: false
      t.text :description
      t.references :report, null: false, foreign_key: true

      t.timestamps
    end
  end
end
