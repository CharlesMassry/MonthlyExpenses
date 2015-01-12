@items << @total
  json.array!(@items) do |item|
    json.name item.name
    json.price item.price

    if item.is_a? Item
      json.id item.id
      json.url item_url(item, format: :json)
    end
  end

