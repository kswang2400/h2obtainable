
class StaticPagesController < ApplicationController
  def index
    render :index
  end

  def developers
    render :developers
  end
end
