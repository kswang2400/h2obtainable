
module Api
  class HourlyUsagesController < ApplicationController
    def index
      @data = HourlyUsage.where(account_id: params[:account_id])

      render "index.json.jbuilder"
    end

    def account_ids
      @account_ids = HourlyUsage.select(:account_id).distinct

      render json: @account_ids
    end
  end
end
