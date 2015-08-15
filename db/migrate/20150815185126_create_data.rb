class CreateData < ActiveRecord::Migration
  def change
    create_table :data do |t|
      t.integer :account_id, null: false
      t.integer :consumption, null: false
      t.integer :month, null: false

      t.timestamps null: false
    end

    add_index :data, :account_id
    add_index :data, :month
  end
end