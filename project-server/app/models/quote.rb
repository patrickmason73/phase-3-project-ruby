class Quote < ActiveRecord::Base
    belongs_to :philosopher
    belongs_to :origin
    belongs_to :era
    has_many :comments
end