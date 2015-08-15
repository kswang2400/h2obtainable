# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require "csv"

CSV.foreach("#{Rails.root}/app/assets/monthly_data.csv") do |row|
  Datum.save(
    month: row[0],
    account_id: row[1],
    consumption: row[2],
  )
end