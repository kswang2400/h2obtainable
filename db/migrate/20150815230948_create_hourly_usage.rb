class CreateHourlyUsage < ActiveRecord::Migration
  def change
    create_table :hourly_usages do |t|
      t.string :account_id
      t.integer :consumption
      t.string :hour

      t.timestamps null: false
    end

    add_index :hourly_usages, :account_id
    add_index :hourly_usages, :hour
  end
end
