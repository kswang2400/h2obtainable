json.array! @data do |usage|
  json.extract! usage, :id, :account_id, :consumption, :hour
end