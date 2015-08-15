class CreateUsages < ActiveRecord::Migration
  def change
    create_table :usages do |t|
      t.integer :consumption, null: false
      t.string :account_id, null: false
      t.string :month, null: false

      t.timestamps null: false
    end

    add_index :usages, :account_id
    add_index :usages, :month
  end
end