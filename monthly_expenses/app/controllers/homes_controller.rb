class HomesController < ApplicationController
  def show
    if user_signed_in?
      @items = current_user.items
      @total = Total.new(@items)
    end
  end
end