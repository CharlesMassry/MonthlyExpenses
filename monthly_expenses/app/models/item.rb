class Item < ActiveRecord::Base
  validates_exclusion_of :name, in: %w{ total Total TOTAL }
end
