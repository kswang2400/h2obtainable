json.array! @account_ids do |id|
  json.extract! id, :account_id
end