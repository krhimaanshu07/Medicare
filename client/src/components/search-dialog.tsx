import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, FileText, Video, Users, Building } from "lucide-react";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const searchResults = [
  {
    id: 1,
    title: "MedicareHD™ - AI-Enhanced MRI",
    description: "Ultra-high definition MRI enhancement with 75% faster acquisition",
    type: "product",
    icon: FileText,
    url: "/products#medicarehd",
  },
  {
    id: 2,
    title: "Clinical Validation Results",
    description: "Comprehensive study of 1,000+ patients demonstrating effectiveness",
    type: "research",
    icon: FileText,
    url: "/resources",
  },
  {
    id: 3,
    title: "AI in Radiology Webinar",
    description: "Expert panel discussion on emerging AI trends",
    type: "webinar",
    icon: Video,
    url: "/resources",
  },
  {
    id: 4,
    title: "Leadership Team",
    description: "Meet our world-class team of medical AI experts",
    type: "company",
    icon: Users,
    url: "/company#team",
  },
  {
    id: 5,
    title: "Stanford Case Study",
    description: "60% reduction in scan time with improved patient satisfaction",
    type: "case-study",
    icon: Building,
    url: "/resources",
  },
];

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");

  const filteredResults = query
    ? searchResults.filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Search Medicare</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products, resources, research..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {query && (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {filteredResults.length > 0 ? (
                filteredResults.map((result) => {
                  const IconComponent = result.icon;
                  return (
                    <div
                      key={result.id}
                      className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-gray-100"
                      onClick={() => {
                        onOpenChange(false);
                        // Navigate to result URL
                        window.location.href = result.url;
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <IconComponent className="h-5 w-5 text-[var(--medical-blue)] mt-0.5" />
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{result.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                          <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full capitalize">
                            {result.type.replace("-", " ")}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No results found for "{query}"</p>
                </div>
              )}
            </div>
          )}

          {!query && (
            <div className="text-center py-8 text-gray-500">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>Start typing to search products, resources, and more</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
