class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.float :efficiency, null: false
      t.string :image_url, null: false

      t.timestamps null: false
    end
  end
end
