class Total
  attr_reader :price
  def initialize(items)
    @price = items.reduce(0) do |accumulator, item|
      accumulator += item.price
    end
  end

  def id
    0
  end

  def name
    "Total"
  end
end