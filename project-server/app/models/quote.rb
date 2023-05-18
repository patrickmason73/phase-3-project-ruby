class Quote < ActiveRecord::Base
    belongs_to :philosopher
    has_many :comments
end