# frozen_string_literal: true

class InitTrackerController < ApplicationController

  def index
    @init_tracker_props = { name: "Stranger" }
  end
end
